let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

let description = document.createElement('h3')
description.append('Description:')
dogDetails.append(description)

let descriptionText = document.createElement('p')
descriptionText.append('This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.')
dogDetails.append(descriptionText)

let feeding = document.createElement('h3')
feeding.append('Feeding Times:')
dogDetails.append(feeding)

let feedingList = document.createElement('ul')
dogDetails.append(feedingList)

let feedingTime1 = document.createElement('li')
feedingTime1.append('9:00 am')
feedingList.append(feedingTime1)

let feedingTime2 = document.createElement('li')
feedingTime2.append('12:00 pm')
feedingList.append(feedingTime2)

let feedingTime3 = document.createElement('li')
feedingTime3.append('5:00 pm')
feedingList.append(feedingTime3)