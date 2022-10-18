call conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
call conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
call conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge
call conda config --add channels conda-forge

call conda create -n blocklyenv -y python=3.10 pandas jupyter matplotlib openpyxl
pause