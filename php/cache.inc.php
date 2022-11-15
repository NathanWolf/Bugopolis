<?php
function getCacheUrl($relativeFile) {
    $basePath = dirname($_SERVER["SCRIPT_FILENAME"]);
    $fullPath = $basePath . '/' . $relativeFile;
    if (!file_exists($fullPath)) {
        die("File not found: $relativeFile");
    }

    return $relativeFile . '?_mod=' . filemtime($fullPath);
}
