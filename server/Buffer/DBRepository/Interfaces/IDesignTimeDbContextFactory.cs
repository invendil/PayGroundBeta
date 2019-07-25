using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DBRepository.Interfaces
{
    public interface IDesignTimeDbContextFactory<out TContext> where TContext : DbContext
    {
        TContext CreateDbContext([NotNullAttribute] string[] args);
    }
}
