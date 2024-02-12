import { defineStore } from 'pinia'

export const tokenStore = defineStore('token', {
  state: () => ({
    tokenAzure:
      '?sv=2022-11-02&ss=bfqt&srt=sco&sp=r&se=2024-12-31T12:27:34Z&st=2024-02-12T04:27:34Z&spr=https&sig=fOf%2Fsnurp420W8P%2BPxPcbIR56eLCGJ8pu4OjXiWj8cY%3D'
  })
})
