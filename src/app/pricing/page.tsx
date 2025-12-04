export default function Pricing() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-12 text-gray-800">Choose Your Training Tier</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-rebeccapurple">Basic Tier</h3>
            <ul className="space-y-2 mb-6 text-left">
              <li>• 3-month training</li>
              <li>• Digital Literacy</li>
              <li>• Specialized Course</li>
              <li>• Digital Monetization</li>
              <li>• Certificate</li>
            </ul>
            <button className="w-full bg-rebeccapurple text-white py-4 rounded-lg font-semibold hover:bg-purple-900 transition">Choose Basic</button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-4 border-rebeccapurple">
            <h3 className="text-2xl font-bold mb-4 text-rebeccapurple">Standard Tier</h3>
            <ul className="space-y-2 mb-6 text-left">
              <li>• 6-month training</li>
              <li>• Expanded curriculum</li>
              <li>• Portfolio & resume support</li>
              <li>• Team projects</li>
              <li>• Standard certificate</li>
            </ul>
            <button className="w-full bg-rebeccapurple text-white py-4 rounded-lg font-semibold hover:bg-purple-900 transition">Choose Standard</button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-rebeccapurple">Advanced Tier</h3>
            <ul className="space-y-2 mb-6 text-left">
              <li>• 1-year training</li>
              <li>• Google Certificate</li>
              <li>• 1:1 mentorship</li>
              <li>• Premium tools & portfolio support</li>
              <li>• Advanced certificate</li>
            </ul>
            <button className="w-full bg-rebeccapurple text-white py-4 rounded-lg font-semibold hover:bg-purple-900 transition">Choose Advanced</button>
          </div>
        </div>
      </div>
    </main>
  );
}