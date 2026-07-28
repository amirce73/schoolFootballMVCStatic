$files = Get-ChildItem -Path "c:\Users\amirce73\Desktop\FootballSchoolMVC\Views\Pages" -Filter *.cshtml
foreach ($file in $files) {
    $content = Get-Content $file.FullName
    $content = $content -replace '\./assets/', '/assets/'
    Set-Content -Path $file.FullName -Value $content
}
