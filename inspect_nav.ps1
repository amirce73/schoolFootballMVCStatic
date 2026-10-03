$files = Get-ChildItem -Path "E:\amirce73\SchoolPlayer\src\pages" -Recurse -Filter "*.tsx"
foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    $navMatches = [regex]::Matches($content, 'navigate\([^)]+\)')
    $linkMatches = [regex]::Matches($content, 'to=[\"''"][^\"''"]+[\"''"]')
    $btnBack = [regex]::Matches($content, 'btn-back[^\n>]*')
    
    Write-Host "================== $($file.Name) =================="
    if ($navMatches.Count -gt 0) {
        Write-Host "  NAVIGATES:"
        foreach ($m in $navMatches) {
            Write-Host "    $($m.Value)"
        }
    }
    if ($linkMatches.Count -gt 0) {
        Write-Host "  LINKS:"
        foreach ($m in $linkMatches) {
            Write-Host "    $($m.Value)"
        }
    }
}
