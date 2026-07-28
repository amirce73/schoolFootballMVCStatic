$sourceDir = "c:\Users\amirce73\Desktop\schoolFootballStatic"
$targetDir = "c:\Users\amirce73\Desktop\FootballSchoolMVC\Views\Pages"

if (-not (Test-Path $targetDir)) {
    New-Item -ItemType Directory -Force -Path $targetDir | Out-Null
}

$files = Get-ChildItem -Path $sourceDir -Filter "*.html"

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    
    # Escape @ to @@ for Razor, so inline CSS/JS won't break
    $escapedContent = $content.Replace("@", "@@")
    
    # Prepend Layout = null to ensure no MVC layout is applied
    $finalContent = "@{`n    Layout = null;`n}`n" + $escapedContent
    
    $targetName = $file.Name.Replace(".html", ".cshtml")
    $targetFile = Join-Path $targetDir $targetName
    
    [IO.File]::WriteAllText($targetFile, $finalContent, [System.Text.Encoding]::UTF8)
    Write-Host "Copied raw: $($file.Name) -> $targetName"
}
