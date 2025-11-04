import React, { useState, useEffect } from 'react';
// Note: In a real environment, you would import icons and chart components.
// Here we define minimal mocks to ensure the single file is runnable and illustrates the design.

// --- MOCK ICON COMPONENTS (lucide-react) ---
const LayoutDashboard = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>;
const Calendar = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>;
const Edit3 = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>;
const Settings = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.44a2 2 0 0 1-.73 1.5l-.89.5a2 2 0 0 0-.5 3.2l.5.89a2 2 0 0 1-1.5.73H4a2 2 0 0 0-2 2v.44a2 2 0 0 0 2 2h.44a2 2 0 0 1 1.5.73l.5.89a2 2 0 0 0 3.2.5l.89-.5a2 2 0 0 1 .73 1.5V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.44a2 2 0 0 1 1.5-.73l.89-.5a2 2 0 0 0 3.2-.5l.5-.89a2 2 0 0 1 .73-1.5h.44a2 2 0 0 0 2-2v-.44a2 2 0 0 0-2-2h-.44a2 2 0 0 1-1.5-.73l-.5-.89a2 2 0 0 0-3.2-.5l-.89.5a2 2 0 0 1-.73-1.5V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>;
const Users = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 4 0 0 0-4-4H6a4 4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 4 0 0 1 0 7.75"/></svg>;
const User = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 4 0 0 0-4-4H9a4 4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const CheckCircle = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>;
const XCircle = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>;
const Clock = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const ArrowUpRight = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>;
const MessageSquare = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const Repeat = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>;
const Zap = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const Sparkles = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.36-5.36-1.41 1.41M6.05 17.95l-1.41 1.41m-1.41-1.41L6.05 17.95M19.41 6.59l-1.41-1.41"/><path d="m10.5 10.5 1.5 1.5 1.5 1.5m-3 0 1.5-1.5 1.5-1.5m-1.5 1.5v-3m0 6v-3"/></svg>;
const Menu = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>;
const LogOut = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>;
const Camera = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h.5a2 2 0 0 1 2 2v2"/><path d="M10 4h-.5a2 2 0 0 0-2 2v2"/><path d="M17 17v-1a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v1"/><path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M21 16v-2a2 2 0 0 0-2-2h-3"/><path d="M5 16v-2a2 2 0 0 1 2-2h3"/></svg>;
// New Icons
const Cake = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 11a4 4 0 0 0 4-4V3a4 4 0 1 0-8 0v4a4 4 0 0 0 4 4Z"/><path d="M19 14H5"/><path d="M12 14v8"/><path d="M5 18h14"/></svg>;
const Save = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>;


// --- InputField Helper Component ---
const InputField = ({ label, id, type = 'text', value, onChange, placeholder, disabled=false }) => (
  <div className="flex flex-col space-y-1">
    <label htmlFor={id} className="text-sm font-medium text-gray-600">
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 shadow-sm transition-shadow focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`}
    />
  </div>
);


// --- MOCK CHART COMPONENTS (recharts) ---
const ResponsiveContainer = ({ children, width = '100%', height = 300 }) => <div style={{ width, height }}>{children}</div>;
const LineChart = ({ data, children, margin = {} }) => (
    <div className="text-center p-4 bg-white rounded-lg shadow-inner border border-gray-100">
        <div className="text-sm font-semibold mb-2">Engagement Trend (Mock Chart)</div>
        <div className="h-48 flex items-center justify-center text-xs text-gray-500 border border-dashed rounded-md p-4">
            {data.length} Data Points Visualized Here
            {children}
        </div>
    </div>
);
const Line = () => null;
const XAxis = () => null;
const YAxis = () => null;
const CartesianGrid = () => null;
const Tooltip = () => null;


// --- MOCK DATA ---
const MOCK_ACCOUNTS = [
    { id: 1, platform: 'Twitter', handle: '@socimaster', status: 'Active', color: 'bg-blue-400', icon: '🐦' },
    { id: 2, platform: 'Facebook', handle: 'Page: Marketing Pro', status: 'Active', color: 'bg-indigo-600', icon: '👍' },
    { id: 3, platform: 'LinkedIn', handle: 'User: Jane Doe', status: 'Active', color: 'bg-blue-700', icon: '💼' },
    { id: 4, platform: 'Instagram', handle: '@pro_visuals', status: 'Needs Re-Auth', color: 'bg-pink-500', icon: '📸' },
];

const MOCK_ANALYTICS = {
    totalAccounts: MOCK_ACCOUNTS.length,
    scheduledPosts: 12,
    publishedLastMonth: 45,
    engagementRate: 5.8,
    growthRate: 1.2,
    posts: [
        { id: 101, platform: 'Twitter', status: 'Published', scheduledAt: '2025-10-25T09:00:00', likes: 120, shares: 15, comments: 5 },
        { id: 102, platform: 'Facebook', status: 'Published', scheduledAt: '2025-10-24T18:00:00', likes: 580, shares: 45, comments: 22 },
        { id: 103, platform: 'Instagram', status: 'Failed', scheduledAt: '2025-10-23T11:00:00', likes: 0, shares: 0, comments: 0, error: 'Media upload failed' },
        { id: 104, platform: 'LinkedIn', status: 'Scheduled', scheduledAt: '2025-10-26T14:30:00', likes: 0, shares: 0, comments: 0 },
    ],
    chartData: [
        { name: 'Mon', Impressions: 4000, Engagement: 2400 },
        { name: 'Tue', Impressions: 3000, Engagement: 1398 },
        { name: 'Wed', Impressions: 2000, Engagement: 9800 },
        { name: 'Thu', Impressions: 2780, Engagement: 3908 },
        { name: 'Fri', Impressions: 1890, Engagement: 4800 },
        { name: 'Sat', Impressions: 2390, Engagement: 3800 },
        { name: 'Sun', Impressions: 3490, Engagement: 4300 },
    ]
};

const MOCK_SCHEDULED_POSTS = [
    { id: 201, date: '2025-10-28', time: '10:30 AM', platform: 'Twitter, Facebook', content: 'New blog post launch! Check it out...', status: 'Scheduled' },
    { id: 202, date: '2025-10-29', time: '3:00 PM', platform: 'Instagram', content: 'Behind the scenes photo shoot.', status: 'Scheduled' },
    { id: 203, date: '2025-10-31', time: '9:00 AM', platform: 'LinkedIn', content: 'Q3 Financial Analysis Report available now.', status: 'Scheduled' },
];

// --- APP PAGES / VIEWS ---

const StatCard = ({ title, value, change, icon: Icon, color }) => (
    <div className="flex flex-col p-5 bg-white rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-xl">
        <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <Icon className={`w-5 h-5 ${color}`} />
        </div>
        <div className="mt-1 flex items-end justify-between">
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            <div className={`flex items-center text-sm font-semibold ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {change > 0 && <ArrowUpRight className="w-4 h-4 mr-1" />}
                {change}%
            </div>
        </div>
    </div>
);

const Dashboard = () => {
    const { totalAccounts, scheduledPosts, publishedLastMonth, engagementRate, chartData } = MOCK_ANALYTICS;

    const summaryCards = [
        { title: 'Connected Accounts', value: totalAccounts, change: 0, icon: Users, color: 'text-indigo-600' },
        { title: 'Scheduled Posts', value: scheduledPosts, change: 15, icon: Clock, color: 'text-yellow-500' },
        { title: 'Last Month Published', value: publishedLastMonth, change: -5, icon: CheckCircle, color: 'text-green-500' },
        { title: 'Avg. Engagement Rate', value: `${engagementRate}%`, change: 2.1, icon: ArrowUpRight, color: 'text-pink-500' },
    ];

    return (
        <div className="space-y-8 p-4 md:p-8">
            <h1 className="text-3xl font-extrabold text-gray-900">Dashboard Overview</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {summaryCards.map((card, index) => <StatCard key={index} {...card} />)}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Weekly Engagement Trend</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="name" stroke="#6b7280" />
                            <YAxis stroke="#6b7280" />
                            <Tooltip />
                            <Line type="monotone" dataKey="Impressions" stroke="#3b82f6" strokeWidth={3} dot={false} />
                            <Line type="monotone" dataKey="Engagement" stroke="#ec4899" strokeWidth={3} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Connected Accounts</h2>
                    <ul className="space-y-3">
                        {MOCK_ACCOUNTS.map(account => (
                            <li key={account.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition">
                                <div className="flex items-center space-x-3">
                                    <span className={`text-xl p-2 rounded-full ${account.color} text-white`}>{account.icon}</span>
                                    <div>
                                        <p className="font-semibold text-gray-900">{account.platform}</p>
                                        <p className="text-sm text-gray-500">{account.handle}</p>
                                    </div>
                                </div>
                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${account.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {account.status}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const PostCreator = ({ setNav }) => {
    const [postContent, setPostContent] = useState('');
    const [mediaFile, setMediaFile] = useState(null);
    const [selectedPlatforms, setSelectedPlatforms] = useState(MOCK_ACCOUNTS.map(a => a.id));
    const [scheduleDate, setScheduleDate] = useState('');
    const [scheduleTime, setScheduleTime] = useState('');

    const handlePlatformToggle = (id) => {
        setSelectedPlatforms(prev =>
            prev.includes(id) ? prev.filter(pid => pid !== id) : [...prev, id]
        );
    };

    const handleGenerateCaption = () => {
        alert('AI Generating Caption and Hashtags... (Mock Call)');
        setPostContent(prev => prev + "\n\n[AI Generated Caption: Optimized for engagement, tone: professional.] #SocialMediaAutomation #MarketingTips #AIpower");
    };

    // Refactored handler to support both immediate posting and scheduling
    const handleSubmitPost = (isImmediate = false) => {
        // Basic validation
        if (!postContent || selectedPlatforms.length === 0) {
            alert('Please fill out content and select platforms.');
            return;
        }

        if (!isImmediate) {
            // Scheduling logic
            if (!scheduleDate || !scheduleTime) {
                alert('Please select a date and time to schedule the post.');
                return;
            }

            const scheduledDateTime = new Date(`${scheduleDate}T${scheduleTime}:00`);
            const now = new Date();
            const delayMs = scheduledDateTime.getTime() - now.getTime();

            if (delayMs < 0) {
                alert('Cannot schedule in the past. Adjust date/time.');
                return;
            }

            alert(`Post scheduled successfully for ${scheduledDateTime.toLocaleString()} on ${selectedPlatforms.length} platform(s). (Celery Task Mocked)`);
        } else {
             alert(`Post published immediately on ${selectedPlatforms.length} platform(s)! (API Call Mocked)`);
        }

        // Reset fields and navigate after success
        setPostContent('');
        setMediaFile(null);
        setSelectedPlatforms(MOCK_ACCOUNTS.map(a => a.id));
        setScheduleDate('');
        setScheduleTime('');
        setNav('dashboard');
    };

    return (
        <div className="space-y-8 p-4 md:p-8">
            <h1 className="text-3xl font-extrabold text-gray-900">Create & Schedule Post</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">Post Content</h2>
                        <textarea
                            className="w-full min-h-[150px] p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition resize-none"
                            placeholder="Compose your post content here... add text, links, and hashtags."
                            value={postContent}
                            onChange={(e) => setPostContent(e.target.value)}
                        />
                        <p className="text-sm text-gray-500 mt-2">
                            {postContent.length} / 280 (Twitter limit)
                        </p>
                        <div className="mt-4 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                            <button
                                onClick={handleGenerateCaption}
                                className="flex-1 flex items-center justify-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300 shadow-md">
                                <Sparkles className="w-5 h-5 mr-2" /> AI Caption Generator
                            </button>
                            <button
                                onClick={() => alert('Sentiment: Positive (95%). Professional tone. (Mock AI 2.3)')}
                                className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition duration-300 shadow-md">
                                <MessageSquare className="w-5 h-5 mr-2" /> Run Sentiment Analysis
                            </button>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">Media Upload</h2>
                        <label className="flex items-center justify-center h-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                            <input
                                type="file"
                                accept="image/*,video/*"
                                className="hidden"
                                onChange={(e) => setMediaFile(e.target.files[0])}
                            />
                            {mediaFile ? (
                                <p className="text-green-600 font-medium">✅ {mediaFile.name} ready to upload</p>
                            ) : (
                                <p className="text-gray-500">Drag and drop or click to upload media (Image/Video)</p>
                            )}
                        </label>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">Select Platforms</h2>
                        <div className="flex flex-wrap gap-4">
                            {MOCK_ACCOUNTS.map(account => (
                                <button
                                    key={account.id}
                                    onClick={() => handlePlatformToggle(account.id)}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition duration-300 ${
                                        selectedPlatforms.includes(account.id)
                                            ? `${account.color.replace('bg-', 'bg-')}/70 text-white shadow-md ring-2 ring-offset-2 ring-indigo-500`
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    <span className="text-lg">{account.icon}</span>
                                    <span>{account.platform}</span>
                                    {selectedPlatforms.includes(account.id) && <CheckCircle className="w-4 h-4" />}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="lg:sticky lg:top-8 lg:self-start space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">Scheduling</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Schedule Date</label>
                                <input
                                    type="date"
                                    value={scheduleDate}
                                    onChange={(e) => setScheduleDate(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Schedule Time</label>
                                <input
                                    type="time"
                                    value={scheduleTime}
                                    onChange={(e) => setScheduleTime(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">
                            Click **Post Now** for immediate publishing, or **Schedule Post** for later.
                        </p>
                    </div>

                    {/* Action Buttons Group: MODIFIED */}
                    <div className="space-y-4">
                        <button
                            onClick={() => handleSubmitPost(true)}
                            className="w-full flex items-center justify-center px-4 py-3 bg-green-600 text-white font-bold text-lg rounded-xl hover:bg-green-700 transition duration-300 shadow-xl shadow-green-200"
                        >
                            <Repeat className="w-6 h-6 mr-2" /> Post Now
                        </button>
                        <button
                            onClick={() => handleSubmitPost(false)}
                            className="w-full flex items-center justify-center px-4 py-3 bg-indigo-600 text-white font-bold text-lg rounded-xl hover:bg-indigo-700 transition duration-300 shadow-xl shadow-indigo-200"
                        >
                            <Zap className="w-6 h-6 mr-2" /> Schedule Post
                        </button>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-200">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">Post Preview (Twitter Mock)</h2>
                        <div className="p-4 bg-white rounded-lg border border-blue-200 shadow-inner">
                            <div className="flex items-center space-x-2 mb-3">
                                <div className="w-8 h-8 rounded-full bg-blue-400"></div>
                                <div>
                                    <p className="font-bold text-gray-900">Current User</p>
                                    <p className="text-xs text-gray-500">@YourHandle</p>
                                </div>
                            </div>
                            <p className="text-gray-800 whitespace-pre-line break-words">{postContent || "Your post content will appear here..."}</p>
                            {mediaFile && (
                                <div className="mt-3 w-full h-32 bg-gray-200 flex items-center justify-center rounded-lg border border-dashed text-sm text-gray-500 overflow-hidden">
                                    <span className="text-gray-700 font-medium">{mediaFile.type.startsWith('image/') ? 'Image Preview' : 'Video Preview'}: {mediaFile.name}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

const CalendarView = () => {
    const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="space-y-8 p-4 md:p-8">
            <h1 className="text-3xl font-extrabold text-gray-900">Scheduling Calendar</h1>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-lg border border-gray-100 min-h-[500px]">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Monthly View</h2>
                    <div className="w-full h-96 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                        <p className="text-gray-500">
                            Full Calendar UI (Drag-and-Drop) would be implemented here.
                        </p>
                    </div>
                    <div className="mt-4 text-sm text-center text-gray-500">
                        <span className="font-semibold">Today:</span> {currentDate}
                    </div>
                </div>

                <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Upcoming Posts</h2>
                    <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2">
                        {MOCK_SCHEDULED_POSTS.map((post) => (
                            <div key={post.id} className="p-3 border border-gray-100 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition duration-300">
                                <div className="flex justify-between items-start">
                                    <p className="text-sm font-semibold text-indigo-700">{post.date} @ {post.time}</p>
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-200 text-indigo-800">
                                        {post.platform.split(',')[0]}
                                    </span>
                                </div>
                                <p className="text-xs text-gray-600 mt-1 line-clamp-2">{post.content}</p>
                                <div className="flex justify-end space-x-2 mt-2">
                                    <button onClick={() => alert(`Editing Post ${post.id}`)} className="text-xs text-blue-500 hover:text-blue-700">Edit</button>
                                    <button onClick={() => alert(`Deleting Post ${post.id}`)} className="text-xs text-red-500 hover:text-red-700">Delete</button>
                                </div>
                            </div>
                        ))}
                        <div className="p-3 text-center text-sm text-gray-500 border-2 border-dashed rounded-lg mt-4">
                            No more scheduled posts.
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Post History & Logs</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                {['ID', 'Platform', 'Status', 'Scheduled Time', 'Likes', 'Shares', 'Comments', 'Actions'].map(header => (
                                    <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {MOCK_ANALYTICS.posts.map((post) => (
                                <tr key={post.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{post.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{post.platform}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            post.status === 'Published' ? 'bg-green-100 text-green-800' :
                                            post.status === 'Scheduled' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                            {post.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{new Date(post.scheduledAt).toLocaleString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{post.likes}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{post.shares}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{post.comments}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button onClick={() => alert(`Viewing Logs for Post ${post.id}`)} className="text-indigo-600 hover:text-indigo-900 mr-3">View Logs</button>
                                        {post.status !== 'Published' && (
                                            <button onClick={() => alert(`Deleting Post ${post.id}`)} className="text-red-600 hover:text-red-900">Delete</button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

// New Profile View component with Date of Birth and Age calculation
const ProfileView = ({ userProfile, setUserProfile }) => {
    // Local state for form inputs, initialized from parent state
    const [name, setName] = useState(userProfile.name);
    const [email, setEmail] = useState(userProfile.email);
    const [phone, setPhone] = useState(userProfile.phone || '');
    const [dateOfBirth, setDateOfBirth] = useState(userProfile.dateOfBirth || '');

    // Sync local state when parent state changes (e.g., after login or other updates)
    useEffect(() => {
        setName(userProfile.name);
        setEmail(userProfile.email);
        setPhone(userProfile.phone || '');
        setDateOfBirth(userProfile.dateOfBirth || '');
    }, [userProfile]);


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Use FileReader to convert image to Base64 for single-file self-containment
            const reader = new FileReader();
            reader.onloadend = () => {
                setUserProfile(prev => ({ ...prev, profilePicUrl: reader.result }));
                alert('Profile picture uploaded!');
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        setUserProfile(prev => ({
            ...prev,
            name,
            email, // Email kept the same as it's disabled
            phone,
            dateOfBirth,
        }));
        alert('Profile details updated successfully!');
    };

    const getAge = (dobString) => {
        if (!dobString) return 'N/A';
        const today = new Date();
        const birthDate = new Date(dobString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return isNaN(age) || age < 0 ? 'Invalid Date' : age;
    };

    const age = getAge(dateOfBirth);

    return (
        <div className="space-y-8 p-4 md:p-8">
            <h1 className="text-3xl font-extrabold text-gray-900">User Profile</h1>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-2xl mx-auto space-y-6">

                {/* Profile Picture Section */}
                <div className="flex flex-col items-center border-b pb-6">
                    <div className="relative w-32 h-32 rounded-full border-4 border-indigo-200 bg-gray-100 shadow-md overflow-hidden">
                        {userProfile.profilePicUrl ? (
                            <img src={userProfile.profilePicUrl} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                            <User className="w-20 h-20 text-gray-400 m-6" />
                        )}
                        <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition duration-300 cursor-pointer">
                            <Camera className="w-8 h-8 text-white" />
                            <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                        </label>
                    </div>
                    <p className="mt-3 text-lg font-semibold text-gray-800">{userProfile.name}</p>
                </div>

                {/* Profile Details Form */}
                <form onSubmit={handleUpdateProfile} className="space-y-4">
                    <InputField
                      label="Full Name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      />

                    <InputField
                      label="Email Address"
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email cannot be changed"
                      disabled={true} // Email should remain disabled as per common practice
                      />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputField
                          label="Date of Birth"
                          id="dateOfBirth"
                          type="date"
                          value={dateOfBirth}
                          onChange={(e) => setDateOfBirth(e.target.value)}
                        />

                        <div className="flex flex-col space-y-1">
                          <label className="text-sm font-medium text-gray-600 flex items-center">
                            <Cake className="w-4 h-4 mr-1 text-pink-500" />
                            Calculated Age
                          </label>
                          <div className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-gray-800 shadow-inner text-center sm:text-left">
                            {age} years old
                          </div>
                        </div>
                    </div>

                    <InputField
                      label="Phone Number"
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="555-123-4567"
                    />

                    <button
                        type="submit"
                        className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
                    >
                        <Save className="w-5 h-5 mr-2" />
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

const SettingsView = () => (
    <div className="space-y-8 p-4 md:p-8">
        <h1 className="text-3xl font-extrabold text-gray-900">System Settings & Accounts</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">Manage Social Integrations</h2>
                <p className="text-gray-600">Securely connect or disconnect your social media profiles using OAuth 2.0.</p>
                {MOCK_ACCOUNTS.map(account => (
                    <div key={account.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-3">
                            <span className={`text-xl p-2 rounded-full ${account.color} text-white`}>{account.icon}</span>
                            <div>
                                <p className="font-semibold text-gray-900">{account.platform}</p>
                                <p className={`text-sm ${account.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>{account.status}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => alert(account.status === 'Active' ? `Revoking token for ${account.platform}...` : `Initiating OAuth for ${account.platform}...`)}
                            className={`px-3 py-1 text-sm font-medium rounded-full transition duration-300 ${
                                account.status === 'Active' ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-green-500 text-white hover:bg-green-600'
                            }`}
                        >
                            {account.status === 'Active' ? 'Disconnect' : 'Connect'}
                        </button>
                    </div>
                ))}
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">Admin Panel (User/System Management)</h2>
                <div className="bg-yellow-50 p-4 border border-yellow-200 rounded-lg space-y-3">
                    <p className="font-semibold text-yellow-800">System is running as Admin.</p>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li><span className="font-medium">Monitor System Activity:</span> View Celery task logs and API usage.</li>
                        <li><span className="font-medium">User Management:</span> 4 Registered Users (Mock).</li>
                        <li><span className="font-medium">Data Export:</span> Export analytics to CSV/Excel (Mock 5.3).</li>
                    </ul>
                    <button onClick={() => alert('Exporting 500 records to CSV... (Mock 5.3)')} className="mt-2 text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                        Export Full System Logs
                    </button>
                </div>
            </div>
        </div>
    </div>
);

// New Component: Landing Page
const LandingPage = ({ setMode }) => (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
        <div className="text-center space-y-8 max-w-3xl">
            <h1 className="text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500 sm:text-7xl">
                Social<span className="text-white">Master</span>
            </h1>
            <p className="text-xl text-indigo-200 font-light">
                Automate your social media strategy, analyze performance, and schedule content across all platforms from one powerful dashboard.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
                <button
                    onClick={() => setMode('auth', 'register')}
                    className="px-8 py-3 bg-pink-500 text-white font-bold rounded-xl text-lg shadow-2xl shadow-pink-500/50 hover:bg-pink-600 transition duration-300 transform hover:scale-105"
                >
                    Start Free Trial
                </button>
                <button
                    onClick={() => setMode('auth', 'login')}
                    className="px-8 py-3 border border-indigo-400 text-indigo-300 font-semibold rounded-xl text-lg hover:bg-indigo-800 transition duration-300"
                >
                    Log In
                </button>
            </div>
        </div>
    </div>
);

// New Component: Auth View (Login/Register)
const AuthView = ({ setMode, mockAuth }) => {
    const [authType, setAuthType] = useState('login'); // 'login' or 'register'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (authType === 'login') {
            alert(`Mock Login for ${email} successful!`);
            mockAuth(name || 'Jane Doe', email);
        } else {
            if (!name) {
                alert('Please provide your name for registration.');
                return;
            }
            alert(`Mock Registration for ${email} successful! Logging in...`);
            mockAuth(name, email);
        }
    };

    const isLogin = authType === 'login';

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="max-w-md w-full space-y-6 bg-white p-10 rounded-xl shadow-2xl border border-gray-200">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">
                    {isLogin ? 'Sign In to Your Account' : 'Create an Account'}
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required={!isLogin}
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                    )}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <button type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300"
                    >
                        {isLogin ? 'Sign In' : 'Register'}
                    </button>
                </form>

                <div className="text-center">
                    <button
                        onClick={() => setAuthType(isLogin ? 'register' : 'login')}
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
                    </button>
                    <button onClick={() => setMode('landing')} className="mt-2 block w-full text-xs text-gray-500 hover:text-gray-700">
                        Back to Landing Page
                    </button>
                </div>
            </div>
        </div>
    );
};


// 7. Main Application Component
const App = () => {
    // top-level state: 'landing', 'auth', 'app'
    const [mode, setMode] = useState('landing');
    // sub-level state for app navigation
    const [nav, setNav] = useState('dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [userProfile, setUserProfile] = useState({
        name: 'Guest User',
        email: 'guest@socialmaster.com',
        profilePicUrl: null, // Base64 or URL
        phone: '555-010-0000',
        dateOfBirth: '1990-01-01',
    });

    const mockAuthSuccess = (name, email) => {
        setUserProfile(prev => ({
            ...prev,
            name: name,
            email: email,
        }));
        setMode('app');
        setNav('dashboard');
    };

    const setAppMode = (newMode, newAuthType = 'login') => {
        if (newMode === 'auth') {
             // Reset login/register fields when entering auth mode
             setMode('auth');
        } else {
             setMode(newMode);
        }
    };

    const handleLogout = () => {
        setMode('landing');
        setNav('dashboard'); // Reset main app nav
    }

    const sidebarItems = [
        { name: 'Dashboard', icon: LayoutDashboard, key: 'dashboard' },
        { name: 'Create Post', icon: Edit3, key: 'creator' },
        { name: 'Scheduler', icon: Calendar, key: 'calendar' },
        { name: 'Profile', icon: User, key: 'profile' }, // New Profile link
        { name: 'Settings & Accounts', icon: Settings, key: 'settings' },
    ];

    const renderAppContent = () => {
        switch (nav) {
            case 'dashboard':
                return <Dashboard />;
            case 'creator':
                return <PostCreator setNav={setNav} />;
            case 'calendar':
                return <CalendarView />;
            case 'profile':
                return <ProfileView userProfile={userProfile} setUserProfile={setUserProfile} />;
            case 'settings':
                return <SettingsView />;
            default:
                return <Dashboard />;
        }
    };

    if (mode === 'landing') {
        return <LandingPage setMode={setAppMode} />;
    }

    if (mode === 'auth') {
        return <AuthView setMode={setAppMode} mockAuth={mockAuthSuccess} />;
    }

    // Main App Mode
    return (
        <div className="flex h-screen bg-gray-50 font-sans antialiased">
            {/* Sidebar (Desktop) */}
            <div className="hidden lg:flex w-64 flex-col fixed inset-y-0 z-30 bg-white border-r border-gray-200 shadow-xl">
                <div className="flex items-center justify-center h-20 border-b border-gray-200">
                    <h1 className="text-2xl font-black text-indigo-600 tracking-wider">
                        Social<span className="text-gray-800">Master</span>
                    </h1>
                </div>
                <div className="flex flex-col items-center p-4 border-b border-gray-100">
                    <div className="w-12 h-12 rounded-full border-2 border-indigo-400 bg-gray-200 shadow-md overflow-hidden">
                        {userProfile.profilePicUrl ? (
                            <img src={userProfile.profilePicUrl} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                            <User className="w-10 h-10 text-gray-500 m-1" />
                        )}
                    </div>
                    <p className="text-sm font-medium mt-2 text-gray-800 truncate">{userProfile.name}</p>
                    <p className="text-xs text-indigo-500 font-light truncate">{userProfile.email}</p>
                </div>

                <nav className="flex flex-col flex-grow p-4 space-y-2 overflow-y-auto">
                    {sidebarItems.map(item => (
                        <button
                            key={item.key}
                            onClick={() => setNav(item.key)}
                            className={`flex items-center px-4 py-3 rounded-xl transition duration-200 ${
                                nav === item.key
                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100 font-bold'
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600 font-medium'
                            }`}
                        >
                            <item.icon className="w-5 h-5 mr-3" />
                            {item.name}
                        </button>
                    ))}
                </nav>
                <div className="p-4 border-t border-gray-200">
                     <button
                        onClick={handleLogout}
                        className="w-full flex items-center px-4 py-3 rounded-xl text-gray-600 hover:bg-red-50 hover:text-red-600 transition duration-200 font-medium"
                    >
                        <LogOut className="w-5 h-5 mr-3" />
                        Sign Out
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Toggle */}
            <div
                className={`fixed inset-0 z-40 lg:hidden transition-opacity ${
                    isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsSidebarOpen(false)}
            >
                {isSidebarOpen && <div className="absolute inset-0 bg-gray-600 opacity-75"></div>}
            </div>
            <div
                className={`fixed inset-y-0 left-0 w-64 z-50 bg-white shadow-2xl transform transition duration-300 ease-in-out ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } lg:hidden`}
            >
                 <div className="flex items-center justify-between h-20 border-b p-4">
                    <h1 className="text-xl font-black text-indigo-600 tracking-wider">
                        Social<span className="text-gray-800">Master</span>
                    </h1>
                    <button onClick={() => setIsSidebarOpen(false)} className="text-gray-500 hover:text-gray-900">
                        <XCircle className="w-6 h-6" />
                    </button>
                </div>
                 <nav className="flex flex-col flex-grow p-4 space-y-2">
                    {sidebarItems.map(item => (
                        <button
                            key={item.key}
                            onClick={() => { setNav(item.key); setIsSidebarOpen(false); }}
                            className={`flex items-center px-4 py-3 rounded-xl transition duration-200 ${
                                nav === item.key
                                    ? 'bg-indigo-600 text-white shadow-lg font-bold'
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600 font-medium'
                            }`}
                        >
                            <item.icon className="w-5 h-5 mr-3" />
                            {item.name}
                        </button>
                    ))}
                    <div className="pt-4">
                         <button
                            onClick={handleLogout}
                            className="w-full flex items-center px-4 py-3 rounded-xl text-gray-600 hover:bg-red-50 hover:text-red-600 transition duration-200 font-medium"
                        >
                            <LogOut className="w-5 h-5 mr-3" />
                            Sign Out
                        </button>
                    </div>
                </nav>
            </div>


            {/* Main Content Area */}
            <div className="flex-1 flex flex-col lg:ml-64 overflow-y-auto">
                {/* Top Bar for Mobile */}
                <header className="sticky top-0 z-20 lg:hidden bg-white shadow-sm border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                        <button onClick={() => setIsSidebarOpen(true)} className="text-gray-500 hover:text-gray-900">
                            <Menu className="w-6 h-6" />
                        </button>
                        <h1 className="text-xl font-black text-indigo-600">Social<span className="text-gray-800">Master</span></h1>
                        <div className="w-8 h-8 rounded-full bg-gray-200 border border-indigo-400 overflow-hidden">
                            {userProfile.profilePicUrl ? (
                                <img src={userProfile.profilePicUrl} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <User className="w-6 h-6 text-gray-500 m-1" />
                            )}
                        </div>
                    </div>
                </header>

                <main className="flex-1 pb-10">
                    {renderAppContent()}
                </main>
            </div>
        </div>
    );
};

export default App;
