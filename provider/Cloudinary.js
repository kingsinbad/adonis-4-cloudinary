'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const cloudinary = require('cloudinary')

class CloudinaryProvider extends ServiceProvider {
  
  register () {
    this.app.singleton('Adonis/Addons/AdonisCloudinary', function (app) {
        const Config = app.use('Adonis/Src/Config')
        const cloud_name = Config.get('cloudinary.name', '')
        const api_key = Config.get('cloudinary.api_key', '')
        const api_secret = Config.get('cloudinary.api_secret', '')
        cloudinary.config({
          cloud_name: cloud_name,
          api_key: api_key,
          api_secret: api_secret
        })
        return cloudinary
    })
  }

}

module.exports = CloudinaryProvider
