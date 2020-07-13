
require Rails.root.join("data", "urls.rb")

#USERS (7)
  User.create(email: "alex@gmail.com", 
    image: "https://images.unsplash.com/photo-1588948138600-bc75fd417834?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    first_name: "alex", last_name: "smith", password: 'password', password_confirmation: 'password')
  User.create(email: "bob@gmail.com", 
    image: "https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
    first_name: "bob",last_name: "jimmy", password: 'password', password_confirmation: 'password')
  User.create(email: "chris@gmail.com",
    image: "https://images.unsplash.com/photo-1593839686924-4b344fac3f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    first_name: "chris",last_name: "lawsh", password: 'password', password_confirmation: 'password')
  User.create(email: "sam@gmail.com", 
    image: "https://images.unsplash.com/photo-1593771009063-e2a5fc81be47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=646&q=80",
    first_name: "sam",last_name: "carslon", password: 'password', password_confirmation: 'password')
  User.create(email: "bill@gmail.com", 
    image: "https://images.unsplash.com/photo-1593591182784-05bba029a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=652&q=80",
    first_name: "bill",last_name: "smith", password: 'password', password_confirmation: 'password')
  User.create(email: "matt@gmail.com", 
    image: "https://images.unsplash.com/photo-1593793602373-ca02114d4a3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    first_name: "matt",last_name: "miller", password: 'password', password_confirmation: 'password')
  User.create(email: "juan@gmail.com", 
    image: "https://images.unsplash.com/photo-1525129075020-d43c7ba72ecf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    first_name: "juan",last_name: "collins", password: 'password', password_confirmation: 'password')

#COLLECTIONS (7)
  7.times do
    Collection.create(user_id: (rand(6)+1), title: Faker::Movies::HarryPotter.location)
  end

#CATEGORIES (7)
  Category.create(title: "Animals") #1
  Category.create(title: "Art") #2
  Category.create(title: "Other") #3
  Category.create(title: "Nature") #4
  Category.create(title: "Places") #5
  Category.create(title: "People") #6
  Category.create(title: "Technology") #7

#PICTURES (27)
  IMAGE_URLS.map { |url| 
    Picture.create(
      category_id: (rand(6)+1), 
      user_id: (rand(6)+1), 
      title: Faker::Movies::StarWars.planet, 
      url: url,
      description: Faker::Lorem.sentence(word_count: 3, supplemental: true),
      views: rand(700)
    )
  }

#COLLECTION-PICTURE JUNCTIONS (50)
  50.times do
    CollectionPicture.create(collection_id: (rand(6)+1), picture_id: (rand(26)+1))
  end 

#PICTURE COMMENTS (50)
  50.times do    
    PictureComment.create(user_id: (rand(6)+1), picture_id: (rand(26)+1), body: Faker::TvShows::DumbAndDumber.quote)
  end

puts "Data Seeded.."
puts "Emails: alex@gmail.com, bob@gmail.com, chris@gmail.com, sam@gmail.com, bill@gmail.com, matt@gmail.com, juan@gmail.com password: 'password' "