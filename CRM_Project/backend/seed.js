/**
 * Seed Script – run AFTER registering your first user account
 * Usage: node seed.js <your-email> <your-password>
 * Example: node seed.js admin@test.com password123
 */
const mongoose = require('mongoose');
const axios    = require('axios');
const dotenv   = require('dotenv');
dotenv.config();

const sampleCustomers = [
  { name: 'Ahmed Khan',       email: 'ahmed.khan@techpk.com',       phone: '+92 300 1111111', company: 'TechPK Solutions',   status: 'Active',   address: 'Lahore, Pakistan',     totalRevenue: 150000, notes: 'Long-term client' },
  { name: 'Sara Malik',       email: 'sara.malik@innovate.pk',      phone: '+92 321 2222222', company: 'Innovate Digital',   status: 'Lead',     address: 'Karachi, Pakistan',    totalRevenue: 0,      notes: 'Interested in web services' },
  { name: 'Usman Ali',        email: 'usman.ali@buildco.pk',        phone: '+92 333 3333333', company: 'BuildCo Pakistan',   status: 'Active',   address: 'Islamabad, Pakistan',  totalRevenue: 320000, notes: 'Pays on time' },
  { name: 'Fatima Siddiqui',  email: 'fatima.s@globalmark.com',     phone: '+92 311 4444444', company: 'Global Marketing',   status: 'Inactive', address: 'Rawalpindi, Pakistan', totalRevenue: 45000,  notes: 'Contract ended' },
  { name: 'Bilal Hassan',     email: 'bilal.h@nextech.pk',          phone: '+92 345 5555555', company: 'NexTech Ltd',        status: 'Lead',     address: 'Faisalabad, Pakistan', totalRevenue: 0,      notes: 'Follow up next month' },
  { name: 'Zara Sheikh',      email: 'zara.sheikh@cloudnet.pk',     phone: '+92 300 6666666', company: 'CloudNet Pakistan',  status: 'Active',   address: 'Peshawar, Pakistan',   totalRevenue: 210000, notes: 'High-value client' },
  { name: 'Omar Farooq',      email: 'omar.farooq@datasoft.com',    phone: '+92 321 7777777', company: 'DataSoft Inc',       status: 'Active',   address: 'Multan, Pakistan',     totalRevenue: 180000, notes: 'Regular projects' },
  { name: 'Hina Rashid',      email: 'hina.r@pixelart.pk',         phone: '+92 333 8888888', company: 'PixelArt Studio',    status: 'Lead',     address: 'Quetta, Pakistan',     totalRevenue: 0,      notes: 'New lead from referral' },
  { name: 'Tariq Mehmood',    email: 'tariq.m@swiftdev.pk',        phone: '+92 311 9999999', company: 'SwiftDev Pakistan',  status: 'Inactive', address: 'Lahore, Pakistan',     totalRevenue: 90000,  notes: 'Budget constraints' },
  { name: 'Ayesha Noor',      email: 'ayesha.n@digitaledge.com',   phone: '+92 345 1010101', company: 'DigitalEdge',        status: 'Active',   address: 'Karachi, Pakistan',    totalRevenue: 400000, notes: 'Enterprise client' },
  { name: 'Kamran Iqbal',     email: 'kamran.i@webcraft.pk',       phone: '+92 300 1212121', company: 'WebCraft Solutions', status: 'Lead',     address: 'Islamabad, Pakistan',  totalRevenue: 0,      notes: 'Demo scheduled' },
  { name: 'Nadia Aslam',      email: 'nadia.a@primetech.com',      phone: '+92 321 1313131', company: 'PrimeTech',          status: 'Active',   address: 'Rawalpindi, Pakistan', totalRevenue: 275000, notes: 'Monthly retainer' },
  { name: 'Asad Butt',        email: 'asad.b@alphasystems.pk',     phone: '+92 333 1414141', company: 'Alpha Systems',      status: 'Inactive', address: 'Faisalabad, Pakistan', totalRevenue: 30000,  notes: 'Paused services' },
  { name: 'Sana Riaz',        email: 'sana.r@creativeminds.pk',    phone: '+92 311 1515151', company: 'Creative Minds',     status: 'Lead',     address: 'Peshawar, Pakistan',   totalRevenue: 0,      notes: 'Needs proposal' },
  { name: 'Faisal Qureshi',   email: 'faisal.q@megacorp.com.pk',   phone: '+92 345 1616161', company: 'MegaCorp Pakistan',  status: 'Active',   address: 'Multan, Pakistan',     totalRevenue: 550000, notes: 'Top client - priority support' },
];

const run = async () => {
  const email    = process.argv[2];
  const password = process.argv[3];

  if (!email || !password) {
    console.error('Usage: node seed.js <email> <password>');
    process.exit(1);
  }

  try {
    console.log('🔑 Logging in...');
    const { data: loginData } = await axios.post('http://localhost:5000/api/auth/login', { email, password });
    const token = loginData.token;
    console.log(`✅ Logged in as ${loginData.user.name}`);

    console.log('\n📦 Seeding 15 customers...');
    let success = 0;
    for (const customer of sampleCustomers) {
      try {
        await axios.post(
          'http://localhost:5000/api/customers',
          customer,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log(`  ✅ Added: ${customer.name}`);
        success++;
      } catch (e) {
        console.log(`  ⚠️  Skipped (exists?): ${customer.name} – ${e.response?.data?.message}`);
      }
    }

    console.log(`\n🎉 Done! Added ${success} customers.\n`);
    process.exit(0);
  } catch (err) {
    console.error('❌ Error:', err.response?.data?.message || err.message);
    process.exit(1);
  }
};

run();
