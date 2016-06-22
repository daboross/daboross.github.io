#!/bin/bash
find projects -type f -exec sed -i 's#https://dabo.guru#http://daboross.net#g' {} \;
