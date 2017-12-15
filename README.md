# Cloudinary Service Provider for Adonis 4.0


### Installation

* Turn your ultra instinct mode on
```curl
$ npm install adonis-4-cloudinary --save
```

* Update your `.env` file with your Cloudinary Credentials
```env
CLOUDINARY_NAME=supersaiyan777
CLOUDINARY_API_KEY=superbabidikey
CLOUDINARY_API_SECRET=ultrainstinctbabidi
```

* Create `config/cloudinary.js` file in your project

```javascript
const Env = use('Env')

module.exports = {
  name: Env.get('CLOUDINARY_NAME', ''),
  api_key: Env.get('CLOUDINARY_API_KEY', ''),
  api_secret: Env.get('CLOUDINARY_API_SECRET', '')
}

```

* Register the `adonis-4-cloudinary` in the service providers in `start/app.js`

```javascript

const providers = [
  ...
  'adonis-4-cloudinary/provider/Cloudinary'
]

const aliases = {
  ...
  Cloudinary: 'Adonis/Addons/AdonisCloudinary'
}

```

### Basic Usage

* In `app/Controllers/Http/UserController.js`

```javascript

'use strict'

const Cloudinary = use('Cloudinary')

class UserController {

  async updateProfilePic({ request, response }) {
    let profilePic = request.file('profile_pic', { types: ['image'], size: '2mb' })
    let cloudinaryMeta = await Cloudinary.uploader.upload(profilePic.tmpPath)
    request.user.profilePic = cloudinaryMeta.secure_url
    await request.user.save()
    return response.redirect('back')
  }

}

module.exports = UserController

```
