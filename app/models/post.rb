class Post < ApplicationRecord
  belongs_to :user
  has_many :comments

  scope :authored_by, ->(author_id) { where(user_id: author_id) }
  scope :time, ->(from) do
    case (from)
      when 'day'
        where(created_at: 1.day.ago..Time.now)
      when 'week'
        where(created_at: 1.week.ago..Time.now)
      when 'month'
        where(created_at: 1.month.ago..Time.now)
      when 'year'
        where(created_at: 1.year.ago..Time.now)
    end 
  end

  # scope :most_viewed, -> { order(views: :asc) }
end
