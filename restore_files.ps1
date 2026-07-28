$sourceDir = "c:\Users\amirce73\Desktop\schoolFootballStatic"
$targetDir = "c:\Users\amirce73\Desktop\FootballSchoolMVC\Views\Pages"

# Copy all HTML files
Copy-Item "$sourceDir\*.html" "$targetDir\" -Force

# Rename and process them
$htmlFiles = Get-ChildItem -Path $targetDir -Filter "*.html"
foreach ($file in $htmlFiles) {
    $cshtmlPath = [System.IO.Path]::ChangeExtension($file.FullName, ".cshtml")
    
    # Read as UTF8 (this is crucial)
    $content = Get-Content $file.FullName -Encoding UTF8 -Raw
    
    # Fix assets
    $content = $content -replace '\./assets/', '/assets/'
    
    # Fix index.cshtml login form
    if ($file.Name -eq "index.html") {
        $content = $content -replace '<form class="login-form">', '<form class="login-form" method="post" action="/index.html">'
        $content = $content -replace '<input dir="ltr" maxlength="11" placeholder=" " type="tel" value="">', '<input dir="ltr" maxlength="11" placeholder=" " type="tel" value="" name="Mobile">'
    }

    # Save as UTF8
    Set-Content -Path $cshtmlPath -Value $content -Encoding UTF8
    
    # Remove old .html from target
    Remove-Item $file.FullName
}

Write-Output "Done restoring and fixing files!"
