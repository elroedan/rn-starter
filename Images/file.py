import os

def list_files_in_directory(directory_path):
    file_list = []

    # Check if the directory exists
    if os.path.exists(directory_path) and os.path.isdir(directory_path):
        # List all files in the directory
        for filename in os.listdir(directory_path):
            if os.path.isfile(os.path.join(directory_path, filename)):
                file_list.append(filename)

    return file_list

# Provide the path to the directory you want to list files from
directory_path = "C:\Users\12086\Documents\Personal projects\PracticeReact\rn-starter\Images"

file_list = list_files_in_directory(directory_path)

if file_list:
    print("Files in the directory:")
    for file in file_list:
        print(file)
else:
    print("No files found in the directory.")
