=begin
write a program in ruby that randomly organize a list of things into groups
prompts the user for a list of things and store them inside an array
prompts the user for a group size
randomly assign things into groups with size given
print out the groups in whatever way you like

enter a list:
bart,homer,lisa,maggie
enter group size:
2
[['bart','lisa'],['maggie','homer']]

if there are left overs with the given group size just assign them to the last group
enter a list:
bart,homer,lisa,maggie,ned
enter group size:
2
[['bart','lisa'],['ned','homer','maggie']]
=end

print "Enter a list: "
list_array = gets.chomp.split(', ')
print "Enter group size: "
group_size = gets.chomp.to_i

counter = 0
new_array = []

if list_array.length % group_size != 0
  length = (list_array.length / group_size).truncate
else
  length = list_array.length / group_size
end

length.times do
  new_array.push (list_array.slice(counter, counter + group_size))
  counter = counter + group_size
  puts counter
end

print "#{new_array} \n"
