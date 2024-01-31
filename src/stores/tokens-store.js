import { defineStore } from 'pinia'

export const tokenStore = defineStore('token', {
  state: () => ({
    tokenAzure:
      '?sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2024-02-10T11:26:21Z&st=2024-01-23T03:26:21Z&spr=https&sig=mpe3aTH4DxOM8ZEDo0Loin8OBMnqvrjFUaPAXFVyNjs%3D'
  })
})
