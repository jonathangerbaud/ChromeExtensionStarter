#!/bin/bash

# TODO Folder architecture
# - react_app
#   - build
#   - dist
# - chrome_ext_source
# - chrome_ext_build

build() 
{
    echo 'building react'
    
    export GENERATE_SOURCEMAP=false

    # 1. Build your React app. This will create the "build" folder
    react-scripts build

    # 2. Copy the content of "build" into "chrome_ext_build" in the parent folder
    # The chrome extension will get the index.html file and all the necessary files
    # for the app to work correctly
    mkdir -p ../chrome_ext_build
    cp -r build/* ../chrome_ext_build   

    # 3. Copy the content of "chrome_ext_source" in "chrome_ext_build" (parent folder)
    # Copy the required files for a chrome extension: manifest, icons, etc...
    cp -r ../chrome_ext_source/* ../chrome_ext_build  

    # 4. Delete useless file. We don't need a robots.txt for a Chrome Extension
    rm ../chrome_ext_build/robots.txt

    # 5. We're done :)
    echo "done"

    sleep 30
}

build