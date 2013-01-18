import re
f = open('../Better.Caoliu/script.js')
re = re.compile('http://.+')
for line in f:
    m = re.search(line)
    if m:
        print "\"" + m.group(0) + "\","