const teachers = [
  'Michael',
  'Sam',
  'Irene',
  'Sophie',
  'Mohamud',
  'Gudio',
  'Zsoka',
]

const classTypes = [
  'Kettlebell',
  'Ballet',
  'Kickbox',
  'Strongman',
  'Yoga',
  'Spinning',
  'Pilates',
]

let classArr = []

const generateClasses = () => {
  for (let i = 35; i <= 41; i++) {
    const weekNum = i
    for (let y = 0; y <= 6; y++) {
      const dayNum = y
      for (let k = 8; k <= 20; k++) {
        const startHour = k
        const myClass = {
          name: classTypes[Math.floor(Math.random() * classTypes.length)],
          freeSpots: 10,
          available: 1,
          year: 2021,
          week: weekNum,
          day: dayNum,
          startTime: startHour,
          teacher: teachers[Math.floor(Math.random() * teachers.length)],
          duration: 60,
        }
        classArr.push(myClass)
      }
    }
  }
}

generateClasses()

export const initialClassData = classArr
