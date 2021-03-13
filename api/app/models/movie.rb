class Movie < ApplicationRecord
    validates :name, presence: true
    validates :release_date, presence: true
    validates :synopsis, presence: true
    validates :director, presence: true
    validates :score ,presence: true, numericality: { only_integer: true, less_than_or_equal_to: 5 }
end
 