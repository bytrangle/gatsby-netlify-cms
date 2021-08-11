---
path: insert-image-from-cloudinary
date: 2021-08-10T07:35:24.668Z
title: Insert Image from Cloudinary
---
Below is an image sourced from Cloudinary.

You can't see it, but when I click *Add component > Image*, Netlify CMS will open my Cloudinary library, and I can choose the image that I want to insert into this post.

![acrylic-paint](https://res.cloudinary.com/bytrangle/image/upload/v1628569271/Code%20demos/pawel-czerwinski-NSg56vIPotw-unsplash_emthmu.jpg "Blue acrylic paint")

You can see the image just fine, right?

However, the problem is that the loaded image has an intrinsic size of 6000x4000px which weighs nearly 4Mb while the display area is only 500px. This means your internet data is being wasted.

I think \`gatsby-image\`, or \`gatsby-plugin-image\` can help, but it requires an image to be available locally to transform it, but this image is being loaded from Cloudinary.

So, what do I do?