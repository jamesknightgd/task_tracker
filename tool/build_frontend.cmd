@echo off
pushd "source\frontend"
cmd /c "node.exe .\node_modules\webpack\bin\webpack.js --config webpack.config.js"
popd
exit 0