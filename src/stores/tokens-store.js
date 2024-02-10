import { defineStore } from 'pinia'

export const tokenStore = defineStore('token', {
  state: () => ({
    tokenAzure:
      '?sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2024-05-31T00:02:45Z&st=2024-02-10T16:02:45Z&spr=https&sig=bQ%2FuEDbwXGMl%2BYxCKNUEuV7cEUmX8uUyMYyDA%2Buo08w%3D'
  })
})
