const apiUrl = process.env.NEXT_PUBLIC_API_URL

const endpoints = {
  getTours: `${apiUrl}/api/tour`,
  getTour: `${apiUrl}/api/tour/:id`,
}

export default endpoints