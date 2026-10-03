$files = Get-ChildItem -Path "e:\amirce73\FootballSchoolMVC\Views\Pages" -Filter "*.cshtml"
foreach ($f in $files) {
    $c = [System.IO.File]::ReadAllText($f.FullName)
    $hasDoctype = $c.Contains("<!DOCTYPE")
    $hasLayout = $c.Contains("Layout =")
    $hasMainJs = $c.Contains("main.js")
    Write-Host "$($f.Name): DocType=$hasDoctype, Layout=$hasLayout, MainJs=$hasMainJs"
}
