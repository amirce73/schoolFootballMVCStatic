$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$pagesDir = "Views/Pages"

$files = Get-ChildItem -Path $pagesDir -Filter "*.cshtml"

$targetShield = 'href="/logout" style="color: rgb(51, 65, 85);"><i class="fa fa-shield">'
$replaceShield = 'href="/verification" style="color: rgb(51, 65, 85);"><i class="fa fa-shield">'

$targetLogout = '<a href="#" style="color: var(--danger); padding: 12px 16px;"><i class="fa fa-sign-out">'
$replaceLogout = '<a href="/logout" style="color: var(--danger); padding: 12px 16px;"><i class="fa fa-sign-out">'

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $modified = $false

    if ($content.Contains($targetShield)) {
        $content = $content.Replace($targetShield, $replaceShield)
        $modified = $true
    }

    if ($content.Contains($targetLogout)) {
        $content = $content.Replace($targetLogout, $replaceLogout)
        $modified = $true
    }

    if ($modified) {
        [System.IO.File]::WriteAllText($file.FullName, $content, $utf8NoBom)
        Write-Host "Updated $($file.Name)"
    }
}
