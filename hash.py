# import code for encoding urls and generating md5 hashes
import urllib, hashlib
 
# Set your variables here
email = "edgarocampo36@gmail.com"
default = "https://i.ibb.co/n0YycJ7/yoconefecto.jpg"
size = 40
 
# construct the url
gravatar_url = "https://www.gravatar.com/avatar/" + hashlib.md5(email.lower()).hexdigest() + "?"
gravatar_url += urllib.urlencode({'d':default, 's':str(size)})

print(gravatar_url)