import React, { useState } from 'react'

const collections = {
  Summer: [
    { name: 'Mountain Tee', color: 'White' },
    { name: 'Temple Tee', color: 'Red' },
    { name: 'River Tee', color: 'Blue' },
  ],
  Winter: [
    { name: 'Snowy Kathmandu', color: 'White' },
    { name: 'Everest Edge', color: 'Grey' },
    { name: 'Mystic Himalayas', color: 'Black' },
  ]
}

function App() {
  const [season, setSeason] = useState('Summer')
  const [selectedDesign, setSelectedDesign] = useState(collections.Summer[0])
  const [uploadedImage, setUploadedImage] = useState(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setUploadedImage(URL.createObjectURL(file))
    }
  }

  return (
    <div className="min-h-screen bg-darkblue text-white p-6">
      <h1 className="text-4xl font-bold text-cherryred mb-4">Nepal Emblem Tees</h1>
      
      <div className="flex gap-4 items-center mb-6">
        <label>Choose Season:</label>
        <select
          className="p-2 rounded text-black"
          value={season}
          onChange={(e) => {
            setSeason(e.target.value)
            setSelectedDesign(collections[e.target.value][0])
          }}
        >
          {Object.keys(collections).map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>

        <label>Design:</label>
        <select
          className="p-2 rounded text-black"
          value={selectedDesign.name}
          onChange={(e) => {
            const item = collections[season].find(d => d.name === e.target.value)
            setSelectedDesign(item)
          }}
        >
          {collections[season].map((d) => (
            <option key={d.name}>{d.name}</option>
          ))}
        </select>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="ml-4"
        />
      </div>

      <div className="bg-white p-4 rounded shadow-lg w-fit">
        <h2 className="text-xl text-darkblue mb-2">{selectedDesign.name} – {selectedDesign.color}</h2>
        <div className="relative group w-[300px] h-[400px] border">
          <img
            src={uploadedImage || 'https://via.placeholder.com/300x400?text=Your+Tee+Design'}
            alt="tshirt preview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black bg-opacity-50 text-white text-lg">
            Zoom Preview
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
