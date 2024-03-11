const getDataJson = (mountId: string): string => {
  const element = document.getElementById(mountId)
  const data = element.getAttribute('data')
  if (data == null) {
    return '{}'
  }

  return JSON.parse(data)
}

export { getDataJson }
