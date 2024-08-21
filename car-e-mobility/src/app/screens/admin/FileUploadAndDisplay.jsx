import React, { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL, listAll, deleteObject } from 'firebase/storage';
import { storage } from '../../../../firebase';

function FileUploadAndDisplay({ PREFIX, admin = true }) {
  const [files, setFiles] = useState([]);
  const [uploadQueue, setUploadQueue] = useState([]);
  const [uploading, setUploading] = useState(false); // Track if an upload is in progress
  const [uploadProgress, setUploadProgress] = useState([]); // Track progress of each upload
  const [view, setView] = useState('all'); // Track which view to show: 'all', 'images', or 'pdfs'

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length + files.length > 5) {
      alert("Solo puedes subir un máximo de 5 archivos.");
    }
    setUploadQueue(selectedFiles);
  };

  const handleUpload = () => {
    if (uploadQueue.length === 0) return;

    setUploading(true);
    const uploadTasks = uploadQueue.map((file, index) => {
      const fileName = `${PREFIX}${file.name}`;
      const storageRef = ref(storage, `uploads/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress((prev) => {
            const newProgress = [...prev];
            newProgress[index] = progress;
            return newProgress;
          });
        },
        (error) => {
          console.error("Upload failed:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setFiles((prevFiles) => [...prevFiles, { name: fileName, url: downloadURL }]);
            if (index === uploadQueue.length - 1) {
              setUploading(false);
              setUploadQueue([]);
              setUploadProgress([]);
            }
          });
        }
      );
    });
  };

  const handleDelete = async (fileName) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este archivo?")) {
      const fileRef = ref(storage, `uploads/${fileName}`);
      try {
        await deleteObject(fileRef);
        setFiles((prevFiles) => prevFiles.filter(file => file.name !== fileName));
        console.log(`File ${fileName} deleted successfully.`);
      } catch (error) {
        console.error("Error deleting file:", error);
      }
    }
  };

  useEffect(() => {
    const listFiles = async () => {
      const listRef = ref(storage, 'uploads/');
      const fileList = await listAll(listRef);

      // Filtra los archivos para que solo incluya aquellos que comienzan con el prefijo
      const filteredFiles = fileList.items
        .filter(itemRef => itemRef.name.startsWith(PREFIX))
        .map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return { name: itemRef.name, url };
        });

      const filesArray = await Promise.all(filteredFiles);
      setFiles(filesArray);
    };

    listFiles();
  }, [PREFIX]);

  return (
    <div className="mt-auto space-y-3 bg-zinc-50 flex flex-col rounded-lg border border-zinc-200 shadow-md px-8 py-3">
      {
        admin && (
          <div className="mb-4 flex flex-col md:flex-row md:justify-between items-center">
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="mb-2"
            />
            <button
              onClick={handleUpload}
              disabled={uploadQueue.length === 0 || uploading || files.length >= 5}
              className={`ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${uploading || files.length >= 5 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Subir
            </button>
          </div>
        )
      }

      {
        uploading && (
          <div className="mb-4">
            {uploadQueue.map((file, index) => (
              <div key={index} className="mb-2 bg-blue-100 border border-blue-200 rounded p-3 flex items-center space-x-4">
                <div className="flex-1">
                  <div className="bg-blue-200 h-2 rounded" style={{ width: `${uploadProgress[index]}%` }}></div>
                </div>
                <span className="text-blue-600 font-medium">{Math.round(uploadProgress[index])}% {file.name}</span>
              </div>
            ))}
          </div>
        )
      }

      <div className="mb-4 flex justify-center space-x-4">
        <button
          onClick={() => setView('all')}
          className={`px-4 py-2 rounded ${view === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Todos
        </button>
        <button
          onClick={() => setView('images')}
          className={`px-4 py-2 rounded ${view === 'images' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Imágenes
        </button>
        <button
          onClick={() => setView('pdfs')}
          className={`px-4 py-2 rounded ${view === 'pdfs' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          PDFs
        </button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Archivos subidos</h3>
        <div className="flex flex-row h-64 overflow-x-auto space-x-4">
          {files.length === 0 && <p>No hay archivos subidos.</p>}
          {files.filter(file =>
            view === 'all' ||
            (view === 'images' && (file.name.endsWith('.jpg') || file.name.endsWith('.png') || file.name.endsWith('.jpeg'))) ||
            (view === 'pdfs' && file.name.endsWith('.pdf'))
          ).map((file, index) => (
            <div key={index} className="border p-2 rounded shadow-sm bg-white relative w-48 flex-shrink-0">
              {admin && (
                <button
                  onClick={() => handleDelete(file.name)}
                  className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
              )}

              {file.name.endsWith('.pdf') ? (
                <div>
                  <a
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-500 underline mb-2"
                  >
                    Descargar
                  </a>
                  <iframe
                    src={file.url}
                    title={file.name}
                    className="w-full h-48 border-0"
                  ></iframe>
                </div>
              ) : (
                <div className="text-center">
                  <a
                    href={file.url}
                    download={file.name}
                    className="block text-blue-500 underline mb-2"
                  >
                    Descargar
                  </a>
                  <img
                    src={file.url}
                    alt={file.name}
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div >
  );
}

export default FileUploadAndDisplay;
