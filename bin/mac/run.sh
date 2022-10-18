#!/bin/bash
# 安装blockly环境和启动一键脚本
# 检测是否有conda，并通过conda安装blocklyenv，依赖是python=3.10 pandas jupyter matplotlib openpyxl。
# 如果安装了就打开jupyter

# PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
# export PATH

conda -V
if [ $? -ne 0 ];then
    echo "Can't find conda in your system. Please install conda and try again."
    exit 1
fi

echo "==> conda found"

# echo "==> conda init"
# source /Users/chajiu/opt/miniconda3/etc/profile.d/conda.sh

echo "==> conda add channels "

conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge
conda config --add channels conda-forge

conda activate blocklyenv
if [ $? -ne 0 ];then
    echo "==> blocklyenv not exist, create env"
    conda create -n blocklyenv -y python=3.10 pandas jupyter matplotlib openpyxl
    if [ $? -eq 0 ];then
        echo "==> create blocklyenv successfully "
    else
        echo "==> fail to create blocklyenv. exit"
        exit 1
    fi
fi

echo "==> change to blocklyenv"
conda activate blocklyenv

echo "==> open jupyter notebook"
jupyter notebook



