class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :posts
  has_many :comments
  has_one_attached :avatar
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  # def as_json(options={})
  #   json = super(options)
  #   son[:avatar_url] = avatar.attached? ? url_for(avatar) : ""
  #   json
  # end
end
