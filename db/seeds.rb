# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# center- lat: 37.7758, lng: -122.435

Bench.create!(
  lat: 37.77,
  lng: -122.4,
  description: "First bench!"
)

Bench.create!(
  lat: 37.76,
  lng: -122.435,
  description: "Second bench!"
)

Bench.create!(
  lat: 37.755,
  lng: -122.45,
  description: "Third bench!"
)

Bench.create!(
  lat: 37.775,
  lng: -122.42,
  description: "Fourth bench!"
)
