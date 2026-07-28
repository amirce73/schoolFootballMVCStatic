$targetDir = "c:\Users\amirce73\Desktop\FootballSchoolMVC\Views\Pages"
$cshtmlFiles = Get-ChildItem -Path $targetDir -Filter "*.cshtml"

foreach ($file in $cshtmlFiles) {
    $content = Get-Content $file.FullName -Encoding UTF8 -Raw
    
    # Escape CSS at-rules for Razor
    $content = $content -replace '@media', '@@media'
    $content = $content -replace '@keyframes', '@@keyframes'
    $content = $content -replace '@font-face', '@@font-face'
    $content = $content -replace '@import', '@@import'
    $content = $content -replace '@-webkit-keyframes', '@@-webkit-keyframes'

    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}

Write-Output "Fixed Razor CSS escaping!"
