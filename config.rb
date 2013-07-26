http_path = "/"
css_dir = "css"
sass_dir = "scss"
images_dir = "img"
javascripts_dir = "js"
output_style = (environment == :production) ? :compressed : :expanded
line_comments = (environment == :production) ? false : true
forcecompile = (environment == :production) ? true : false
relative_assets = true
require 'animation'
# sass_options = (environment == :production) ? { :debug_info => false } : { :debug_info => true }
# line_comments = false

# # Make a copy of sprites with a name that has no uniqueness of the hash.
# on_sprite_saved do |filename|
#   if File.exists?(filename)
#     FileUtils.cp filename, filename.gsub(%r{-s[a-z0-9]{10}\.png$}, '.png')
#     # Note: Compass outputs both with and without random hash images.
#     # To not keep the one with hash, add: (Thanks to RaphaelDDL for this)
#     FileUtils.rm_rf(filename)
#   end
# end

# # Replace in stylesheets generated references to sprites
# # by their counterparts without the hash uniqueness.
# on_stylesheet_saved do |filename|
#   if File.exists?(filename)
#     css = File.read filename
#     File.open(filename, 'w+') do |f|
#       f << css.gsub(%r{-s[a-z0-9]{10}\.png}, '.png')
#     end
#   end
# end