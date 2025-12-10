export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mb-4">
          AI Nutrition Assistant
        </h1>
        <p className="text-xl text-center mb-8 text-gray-600">
          Your personal AI-powered nutrition assistant
        </p>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Welcome!</h2>
          <p className="mb-4">
            This is your AI Nutrition Assistant - a graduation project designed to help you
            make better nutrition choices with the power of artificial intelligence.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">🥗 Smart Meal Planning</h3>
              <p className="text-sm text-gray-600">
                Get personalized meal recommendations based on your dietary needs and preferences.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">📊 Nutrition Tracking</h3>
              <p className="text-sm text-gray-600">
                Track your daily nutrition intake and get insights to improve your diet.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">🤖 AI-Powered Advice</h3>
              <p className="text-sm text-gray-600">
                Receive intelligent nutrition advice tailored to your health goals.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">📱 Easy to Use</h3>
              <p className="text-sm text-gray-600">
                Simple and intuitive interface for effortless nutrition management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
