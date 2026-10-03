Add-Type -AssemblyName System.Net.Http

$loginUrl = "http://localhost:5035/"
$handler = New-Object System.Net.Http.HttpClientHandler
$cookieContainer = New-Object System.Net.CookieContainer
$handler.CookieContainer = $cookieContainer
$client = New-Object System.Net.Http.HttpClient($handler)

# 1. Fetch login page
$loginPage = $client.GetStringAsync($loginUrl).Result

# Check if there is an antiforgery token
$tokenMatch = [regex]::Match($loginPage, 'name="__RequestVerificationToken"\s+type="hidden"\s+value="([^"]+)"')
$token = if ($tokenMatch.Success) { $tokenMatch.Groups[1].Value } else { "" }

$content = New-Object "System.Collections.Generic.Dictionary[string,string]"
$content.Add("Mobile", "09123456789")
if ($token) {
    $content.Add("__RequestVerificationToken", $token)
}
$formContent = New-Object System.Net.Http.FormUrlEncodedContent($content)

$response = $client.PostAsync($loginUrl, $formContent).Result
Write-Host "Login response: $($response.StatusCode)"

# List of all routes from SchoolPlayer
$routes = @(
    "dashboard",
    "profile-hub",
    "financial-hub",
    "specialized-hub",
    "registration",
    "store",
    "gallery",
    "training-backpack",
    "financial-timeline",
    "verification",
    "registration-history",
    "personal-info",
    "contact-info",
    "passport-info",
    "bank-info",
    "sports-info",
    "club-info",
    "clothing-info",
    "documents",
    "password",
    "attendance",
    "talent",
    "insurance",
    "insurance-status",
    "certificate",
    "certificates",
    "bulletin"
)

Write-Host "=================== Testing All Routes ==================="
foreach ($r in $routes) {
    $url = "http://localhost:5035/$r"
    $res = $client.GetAsync($url).Result
    $status = [int]$res.StatusCode
    if ($status -eq 200) {
        Write-Host "  [OK 200] $url" -ForegroundColor Green
    } else {
        Write-Host "  [FAIL $status] $url" -ForegroundColor Red
    }
}
