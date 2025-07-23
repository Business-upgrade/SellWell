const { useState } = React;

    // Header component from provided index.jsx consistent across pages
    function Header() {
        return (
            <header className="header">
                <div className="header-content">
                    <a href="#" className="logo">
                        <img src="img/logo.png" alt="SellWell Logo" />
                        SellWell
                    </a>
                    <nav className="nav">
                        <a href="/index.html">Home</a>
                        <a href="/index.html#dashboard-section">Dashboard</a>
                        <a href="/email-assistant.html" className="active">Email Assistant</a>
                        <a href="/index.html#integrations-section">Integrations</a>
                        <a href="/index.html#contact-section">Contact</a>
                    </nav>
                </div>
            </header>
        );
    }

    // Email Assistant page component
    function EmailAssistant() {
        const [isConnected, setIsConnected] = useState(false);
        const [emailProvider, setEmailProvider] = useState('');
        const [showNewTemplate, setShowNewTemplate] = useState(false);
        const [templates, setTemplates] = useState([
            {
                id: 1,
                name: 'Welcome Email',
                subject: 'Welcome to our service!',
                trigger: 'New customer signup',
                status: 'active',
                responses: 24
            },
            {
                id: 2,
                name: 'Support Follow-up',
                subject: 'How was your support experience?',
                trigger: 'Support ticket closed',
                status: 'active',
                responses: 12
            }
        ]);
        const [newTemplate, setNewTemplate] = useState({
            name: '',
            subject: '',
            content: '',
            trigger: ''
        });

        // Icon components with fallback to FontAwesome for simplicity
        const icons = {
            mail: () => <i className="fa-solid fa-envelope" aria-hidden="true"></i>,
            barChart3: () => <i className="fa-solid fa-chart-bar" aria-hidden="true"></i>,
            clock: () => <i className="fa-solid fa-clock" aria-hidden="true"></i>,
            checkCircle: () => <i className="fa-solid fa-circle-check" aria-hidden="true"></i>,
            plus: () => <i className="fa-solid fa-plus" aria-hidden="true"></i>,
            eye: () => <i className="fa-solid fa-eye" aria-hidden="true"></i>,
            edit3: () => <i className="fa-solid fa-pen-to-square" aria-hidden="true"></i>,
            trash2: () => <i className="fa-solid fa-trash" aria-hidden="true"></i>,
            alertCircle: () => <i className="fa-solid fa-circle-exclamation" aria-hidden="true"></i>,
            settings: () => <i className="fa-solid fa-gear" aria-hidden="true"></i>,
            checkCircleGreen: () => <i className="fa-solid fa-circle-check" style={{color: '#22c55e'}} aria-hidden="true"></i>
        };

        function handleConnectEmail(provider) {
            setEmailProvider(provider);
            setIsConnected(true);
        }

        function handleCreateTemplate(e) {
            e.preventDefault();
            if (newTemplate.name && newTemplate.subject && newTemplate.content && newTemplate.trigger) {
                const template = {
                    id: templates.length + 1,
                    ...newTemplate,
                    status: 'active',
                    responses: 0
                };
                setTemplates([...templates, template]);
                setNewTemplate({ name: '', subject: '', content: '', trigger: '' });
                setShowNewTemplate(false);
            } else {
                alert("Please fill in all template fields.");
            }
        }

        function deleteTemplate(id) {
            if(window.confirm("Are you sure you want to delete this template?")) {
                setTemplates(templates.filter(t => t.id !== id));
            }
        }

        return (
            <>
                <section className="hero">
                    <div className="container">
                        <h1 className="hero-title">Email Assistant</h1>
                        <p className="hero-subtitle">Set up automated email responses and track customer communication progress.</p>
                        <div style={{display:"flex", justifyContent:"center", gap:"2rem", marginTop:"1.5rem", color:"#a4c5f7"}}>
                            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                                {icons.mail()}
                                <span style={{marginTop:"0.35rem"}}>Smart Auto-replies</span>
                            </div>
                            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                                {icons.barChart3()}
                                <span style={{marginTop:"0.35rem"}}>Analytics Dashboard</span>
                            </div>
                            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                                {icons.clock()}
                                <span style={{marginTop:"0.35rem"}}>24/7 Automation</span>
                            </div>
                        </div>
                    </div>
                </section>

                {!isConnected ? (
                    <section className="connection-section">
                        <div className="container">
                            <div className="section-header">
                                <h2>Connect Your Email</h2>
                                <p>Choose your email provider to get started with automated responses</p>
                            </div>

                            <div className="email-providers">
                                <div className="provider-card" onClick={() => handleConnectEmail('gmail')}>
                                    <div className="provider-icon gmail">{icons.mail()}</div>
                                    <h3>Gmail</h3>
                                    <p>Connect your Gmail account</p>
                                    <button className="connect-btn">Connect Gmail</button>
                                </div>

                                <div className="provider-card" onClick={() => handleConnectEmail('outlook')}>
                                    <div className="provider-icon outlook">{icons.mail()}</div>
                                    <h3>Outlook</h3>
                                    <p>Connect your Outlook account</p>
                                    <button className="connect-btn">Connect Outlook</button>
                                </div>

                                <div className="provider-card" onClick={() => handleConnectEmail('custom')}>
                                    <div className="provider-icon custom">{icons.settings()}</div>
                                    <h3>Custom SMTP</h3>
                                    <p>Use your own email server</p>
                                    <button className="connect-btn">Configure SMTP</button>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    <section className="dashboard-section">
                        <div>
                            <div className="dashboard-header">
                                <div className="connection-status">
                                    <span className="status-icon connected">{icons.checkCircleGreen()}</span>
                                    <div className="status-info">
                                        <h3>Email Connected</h3>
                                        <p>Connected to {emailProvider.charAt(0).toUpperCase() + emailProvider.slice(1)}</p>
                                    </div>
                                </div>
                                <button
                                    className="btn"
                                    onClick={() => setShowNewTemplate(true)}
                                    title="Create New Email Template"
                                >
                                    {icons.plus()}
                                    New Template
                                </button>
                            </div>

                            <div className="stats-grid" style={{marginBottom:"2rem"}}>
                                <div className="stat-card">
                                    <div className="stat-icon">{icons.mail()}</div>
                                    <div className="stat-info">
                                        <h3>156</h3>
                                        <p>Emails Sent Today</p>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-icon">{icons.checkCircle()}</div>
                                    <div className="stat-info">
                                        <h3>89%</h3>
                                        <p>Response Rate</p>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-icon">{icons.clock()}</div>
                                    <div className="stat-info">
                                        <h3>2.3s</h3>
                                        <p>Avg Response Time</p>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-icon">{icons.barChart3()}</div>
                                    <div className="stat-info">
                                        <h3>{templates.length}</h3>
                                        <p>Active Templates</p>
                                    </div>
                                </div>
                            </div>

                            <div className="templates-section" aria-label="Email Templates">
                                <h3>Email Templates</h3>
                                <div className="templates-grid">
                                    {templates.map(template => (
                                        <div key={template.id} className="template-card" role="article" tabIndex="0" aria-label={`${template.name} template`}>
                                            <div className="template-header">
                                                <h4>{template.name}</h4>
                                                <div className="template-actions" role="group" aria-label="Template actions">
                                                    <button className="action-btn" title="View Template Content" aria-label={`View ${template.name} template`}>
                                                        {icons.eye()}
                                                    </button>
                                                    <button className="action-btn" title="Edit Template" aria-label={`Edit ${template.name} template`}>
                                                        {icons.edit3()}
                                                    </button>
                                                    <button
                                                      className="action-btn delete"
                                                      onClick={() => deleteTemplate(template.id)}
                                                      title="Delete Template"
                                                      aria-label={`Delete ${template.name} template`}
                                                    >
                                                        {icons.trash2()}
                                                    </button>
                                                </div>
                                            </div>
                                            <p className="template-subject">{template.subject}</p>
                                            <div className="template-meta">
                                                <span className="trigger">Trigger: {template.trigger}</span>
                                                <span className={`status ${template.status}`}>
                                                    {template.status === 'active' ? icons.checkCircle() : icons.alertCircle()} {template.status}
                                                </span>
                                            </div>
                                            <div className="template-stats">
                                                <span>{template.responses} responses this month</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {showNewTemplate && (
                    <div className="modal-overlay" onClick={() => setShowNewTemplate(false)} role="dialog" aria-modal="true" aria-labelledby="modalTitle">
                        <div className="modal" onClick={e => e.stopPropagation()}>
                            <div className="modal-header">
                                <h3 id="modalTitle">Create New Email Template</h3>
                                <button
                                    className="close-btn"
                                    aria-label="Close modal"
                                    onClick={() => setShowNewTemplate(false)}
                                >
                                    ×
                                </button>
                            </div>
                            <form onSubmit={handleCreateTemplate}>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="template-name">Template Name</label>
                                        <input
                                            id="template-name"
                                            name="name"
                                            type="text"
                                            value={newTemplate.name}
                                            onChange={e => setNewTemplate({ ...newTemplate, name: e.target.value })}
                                            placeholder="e.g., Welcome Email"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="template-subject">Email Subject</label>
                                        <input
                                            id="template-subject"
                                            name="subject"
                                            type="text"
                                            value={newTemplate.subject}
                                            onChange={e => setNewTemplate({ ...newTemplate, subject: e.target.value })}
                                            placeholder="e.g., Welcome to our service!"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="template-trigger">Trigger Event</label>
                                        <select
                                            id="template-trigger"
                                            name="trigger"
                                            value={newTemplate.trigger}
                                            onChange={e => setNewTemplate({ ...newTemplate, trigger: e.target.value })}
                                            required
                                        >
                                            <option value="">Select trigger</option>
                                            <option value="New customer signup">New customer signup</option>
                                            <option value="Support ticket created">Support ticket created</option>
                                            <option value="Support ticket closed">Support ticket closed</option>
                                            <option value="Payment received">Payment received</option>
                                            <option value="Subscription expired">Subscription expired</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="template-content">Email Content</label>
                                        <textarea
                                            id="template-content"
                                            name="content"
                                            value={newTemplate.content}
                                            onChange={e => setNewTemplate({ ...newTemplate, content: e.target.value })}
                                            placeholder="Write your email content here..."
                                            rows="6"
                                            required
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="modal-actions">
                                    <button type="button" className="btn btn-secondary" onClick={() => setShowNewTemplate(false)}>
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Create Template
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </>
        );
    }

    function App() {
        return (
            <>
                <Header />
                <EmailAssistant />
            </>
        );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
