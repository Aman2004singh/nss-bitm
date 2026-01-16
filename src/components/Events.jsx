export default function Events() {
  return (
    <section id="events" className="w-full bg-gray-50 py-16">
      <div className="w-full px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#19366b] mb-4">Events</h2>
          <div className="w-24 h-1 bg-[#F6170F] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Event Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="h-48 bg-gradient-to-r from-[#19366b] to-[#F6170F] flex items-center justify-center">
              <span className="text-white text-4xl">📅</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#19366b] mb-2">Community Outreach</h3>
              <p className="text-gray-600 mb-4">Join us in our community service initiatives aimed at helping the underprivileged.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Date: Coming Soon</span>
                <button className="bg-[#F6170F] text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                  Register
                </button>
              </div>
            </div>
          </div>
          
          {/* Event Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="h-48 bg-gradient-to-r from-[#19366b] to-[#F6170F] flex items-center justify-center">
              <span className="text-white text-4xl">🌱</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#19366b] mb-2">Environmental Drive</h3>
              <p className="text-gray-600 mb-4">Participate in our tree plantation and cleanliness drives across the city.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Date: Coming Soon</span>
                <button className="bg-[#F6170F] text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                  Register
                </button>
              </div>
            </div>
          </div>
          
          {/* Event Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="h-48 bg-gradient-to-r from-[#19366b] to-[#F6170F] flex items-center justify-center">
              <span className="text-white text-4xl">❤️</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#19366b] mb-2">Health Camp</h3>
              <p className="text-gray-600 mb-4">Free medical check-ups and health awareness programs for rural communities.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Date: Coming Soon</span>
                <button className="bg-[#F6170F] text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            Stay tuned for updates on upcoming events and activities organized by NSS BIT Mesra.
          </p>
        </div>
      </div>
    </section>
  );
}
