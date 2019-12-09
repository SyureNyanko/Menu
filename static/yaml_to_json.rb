require 'json'
require 'yaml'

filepath = ARGV[0]

yaml = File.read(filepath)
obj = YAML.safe_load(yaml, [], [], true)

puts(JSON.pretty_generate(obj))
