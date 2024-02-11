export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const data = await $fetch('http://localhost:8080/api/launchr');
  console.log(data)

  return {
    state: "SUCCESS",
    result: data,
  }
})
