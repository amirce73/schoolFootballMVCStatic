$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession
# 1. Login
$loginRes = Invoke-WebRequest -Uri 'http://localhost:5035/' -WebSession $session -UseBasicParsing
if ($loginRes.Content -match '__RequestVerificationToken" type="hidden" value="([^"]+)"') {
    $token = $matches[1]
    $postBody = @{
        "Mobile" = "09123456789"
        "__RequestVerificationToken" = $token
    }
    $loginPost = Invoke-WebRequest -Uri 'http://localhost:5035/' -Method Post -Body $postBody -WebSession $session -UseBasicParsing
    Write-Output "Logged in! Status: $($loginPost.StatusCode)"
}

# 2. Test routes
$testRoutes = @(
    '/dashboard',
    '/profile-hub',
    '/financial-hub',
    '/specialized-hub',
    '/registration',
    '/store',
    '/gallery',
    '/training-backpack',
    '/bulletin',
    '/attendance',
    '/talent',
    '/insurance',
    '/insurance-status',
    '/certificate',
    '/club-info',
    '/documents',
    '/password',
    '/verification',
    '/personal-info',
    '/contact-info',
    '/passport-info',
    '/clothing-info',
    '/bank-info',
    '/financial-timeline',
    '/registration-history',
    '/sports-info'
)

foreach ($route in $testRoutes) {
    try {
        $res = Invoke-WebRequest -Uri "http://localhost:5035$route" -WebSession $session -UseBasicParsing
        $viewMatch = "None"
        if ($res.Content -match 'id="view-([^"]+)"') { $viewMatch = $matches[1] }
        Write-Output "$route -> Status: $($res.StatusCode), View: $viewMatch"
    } catch {
        Write-Output "$route -> Error: $($_.Exception.Response.StatusCode.value__)"
    }
}
