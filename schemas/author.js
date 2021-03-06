export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'address',
      title: 'Address',
      type: 'address'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: []
        }
      ]
    },
    {
      name: 'eyeem',
      type: 'url',
      title: 'EyeEm',
      description: 'url for EyeEm'
    },
    {
      name: 'facebook',
      type: 'url',
      title: 'Facebook',
      description: 'url for Facebook'
    },
    {
      name: 'instagram',
      type: 'url',
      title: 'Instagram',
      description: 'url for Insta'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email ID'
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone Number'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
};
