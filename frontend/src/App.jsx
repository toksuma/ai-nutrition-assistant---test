import { useState } from 'react'

function App() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const handleImageSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedImage(file)
      setImagePreview(URL.createObjectURL(file))
      setResult(null)
      setError(null)
    }
  }

  const handleAnalyze = async () => {
    if (!selectedImage) return

    setLoading(true)
    setError(null)
    setResult(null)

    const formData = new FormData()
    formData.append('file', selectedImage)

    try {
      const response = await fetch('http://localhost:8000/api/analyze-image', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to analyze image')
      }

      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError(err.message || 'An error occurred while analyzing the image')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🍳 AI Nutrition Chef
          </h1>
          <p className="text-xl text-gray-600">
            Upload a photo of your fridge and get instant recipe suggestions
          </p>
        </div>

        {/* Upload Area */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-500 transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <svg
                    className="w-16 h-16 text-gray-400 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="text-lg text-gray-600 mb-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-sm text-gray-500">
                    PNG, JPG or JPEG (MAX. 10MB)
                  </p>
                </div>
              </label>
            </div>

            {imagePreview && (
              <div className="mt-6">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-w-full h-64 object-cover rounded-lg mx-auto"
                />
                <button
                  onClick={handleAnalyze}
                  disabled={loading}
                  className="mt-4 w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  {loading ? 'Analyzing...' : 'Analyze Image'}
                </button>
              </div>
            )}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600"></div>
              </div>
              <p className="mt-4 text-gray-600">Analyzing your ingredients...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <p className="text-red-800">❌ {error}</p>
            </div>
          )}

          {/* Result Card */}
          {result && !loading && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Analysis Results
              </h2>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  🥗 Ingredients Found:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  👨‍🍳 Recipe Suggestion:
                </h3>
                <p className="text-xl text-indigo-600 font-semibold">
                  {result.recipe_suggestion}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  🔥 Estimated Calories:
                </h3>
                <p className="text-3xl font-bold text-orange-600">
                  {result.calories} kcal
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
