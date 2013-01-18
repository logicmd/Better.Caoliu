import re
f = open('122991.user.js')
re = re.compile('http://.+')
for line in f:
    m = re.search(line)
    if m:
        print "\"" + m.group(0) + "\","