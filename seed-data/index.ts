import { initialClassData } from './data'

export async function insertSeedData(ks: any) {
  const keystone = ks.keystone || ks
  const adapter = keystone.adapters?.MongooseAdapter || keystone.adapter

  console.log(`🌱 Inserting Seed Data: ${initialClassData.length} classes`)
  const { mongoose } = adapter
  for (const sportClassData of initialClassData) {
    console.log(`Adding class: ${sportClassData.name}`)
    await mongoose.model('SportClass').create(sportClassData)
  }
  console.log(`✅ Seed Data Inserted: ${initialClassData.length} classes`)
  console.log(
    `👋 Please start the process with \`yarn dev\` or \`npm run dev\``,
  )
  process.exit()
}
