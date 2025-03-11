require_relative 'Plugin'
require 'date'

class AgeCalculatorPlugin < Plugin
    attr_reader :data, :ages
      
    def initialize(data)
        @data = data

        # print data
        # puts data
        # puts data[0]
        # puts data[0]["nathalia"]
        # puts data["nathalia"]
        # puts data["leandro"]
        
        ages = {}
        data[0].each do |name, birthdate|
            ages[name] = birthdate

        end
        
        @ages = ages
    end

    def execute
        
        ages.each do |name, birthdate|
            ages[name] = age(birthdate)
        end

        return ages
    end

    def age (bdate)

        now = Date.today
        bdate = Date.parse(bdate)

        return now.year - bdate.year - ((now.month > bdate.month || (now.month == bdate.month && now.day >= bdate.day)) ? 0 : 1)

    end

end