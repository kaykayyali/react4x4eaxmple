class ExampleController < ApplicationController
  def main

    render 'example_page'
  end

  def genFeed
    url = "http://www.nasa.gov/rss/dyn/breaking_news.rss"
    #url = "http://randomimage.setgetgo.com/get.php?&height=100&width=100&type=png"
    feed = Feedjira::Feed.fetch_and_parse url
    entryArray = []
    feed.entries.each do |entry|
      newEntry = {
        title:  entry.title,
        url: entry.entry_id,
        image: entry.enclosure_url
      }
      entryArray.push(newEntry)
    end
    render status: 200, json: feedArray
  end
end
