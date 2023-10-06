a = [1,2,3,4]

new_array = []

a.each_index do |ind1|
  a.each_index do |ind2|
    new_array << a[ind1..ind2] if ind1 <= ind2 
  end 
end 

# p new_array

p a.permutation().to_a